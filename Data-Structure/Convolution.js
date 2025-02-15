class Convolution {
    /**
     * @description FFT（高速フーリエ変換）とNTT（数論的フーリエ変換）を用いた多項式の畳み込み（Convolution）を行う。
     * @param {number[]} re - 実数部の配列
     * @param {number[]} im - 虚数部の配列（通常は0で初期化）
     * @param {boolean} inv - 真の場合は逆変換を行う
     * @returns {void}
     * @warning FFTは浮動小数点を利用し、NTTはをmod 998244353などの素数による剰余演算を利用する
     */
    static fft(re, im, inv) {
        const n = re.length;
        for (let i = 1, j = 0; i < n; i++) {
            let bit = n >> 1;
            for (; j & bit; bit >>= 1) j -= bit;
            j += bit;
            if (i < j) {
                [re[i], re[j]] = [re[j], re[i]];
                [im[i], im[j]] = [im[j], im[i]];
            }
        }

        for (let len = 2; len <= n; len <<= 1) {
            const ang = ((2 * Math.PI) / len) * (inv ? -1 : 1);
            const wlen_re = Math.cos(ang);
            const wlen_im = Math.sin(ang);
            for (let i = 0; i < n; i += len) {
                let w_re = 1,
                    w_im = 0;
                for (let j = 0; j < len >> 1; j++) {
                    const u_re = re[i + j],
                        u_im = im[i + j];
                    const v_re = re[i + j + (len >> 1)] * w_re - im[i + j + (len >> 1)] * w_im;
                    const v_im = re[i + j + (len >> 1)] * w_im + im[i + j + (len >> 1)] * w_re;
                    re[i + j] = u_re + v_re;
                    im[i + j] = u_im + v_im;
                    re[i + j + (len >> 1)] = u_re - v_re;
                    im[i + j + (len >> 1)] = u_im - v_im;
                    const next_w_re = w_re * wlen_re - w_im * wlen_im;
                    const next_w_im = w_re * wlen_im + w_im * wlen_re;
                    w_re = next_w_re;
                    w_im = next_w_im;
                }
            }
        }

        if (inv) {
            for (let i = 0; i < n; i++) {
                re[i] /= n;
                im[i] /= n;
            }
        }
    }

    /**
     * @description FFTを用いた2つの配列の畳み込み（Convolution）を計算する。
     * 結果はサイズ (a.length + b.length - 1) の新しい配列として返される。
     * @param {number[]} a - 最初の配列
     * @param {number[]} b - 2番目の配列
     * @return {number[]} - 畳み込み結果の配列
     * @warning conv[i]は、
     */
    static convolution(a, b) {
        const n = a.length,
            m = b.length;
        let size = 1;
        while (size < n + m - 1) size <<= 1;

        const A_re = new Array(size).fill(0);
        const A_im = new Array(size).fill(0);
        const B_re = new Array(size).fill(0);
        const B_im = new Array(size).fill(0);

        for (let i = 0; i < n; i++) A_re[i] = a[i];
        for (let i = 0; i < m; i++) B_re[i] = b[i];

        this.fft(A_re, A_im, false);
        this.fft(B_re, B_im, false);

        for (let i = 0; i < size; i++) {
            const temp_re = A_re[i] * B_re[i] - A_im[i] * B_im[i];
            const temp_im = A_re[i] * B_im[i] + A_im[i] * B_re[i];
            A_re[i] = temp_re;
            A_im[i] = temp_im;
        }

        this.fft(A_re, A_im, true);

        const res = new Array(n + m - 1);
        for (let i = 0; i < n + m - 1; i++) res[i] = Math.round(A_re[i]);
        return res;
    }

    /** @constant {number} MOD - NTTで用いるmod 998244353 */
    static MOD = 998244353;

    /** @constant {number} PRIMITIVE_ROOT - MODに対する原始根（通常は3） */
    static PRIMITIVE_ROOT = 3;

    /**
     *
     * @description 累乗計算をmod演算下で行う。
     * @param {number} base - 底
     * @param {number} exponent - 指数（非負整数）
     * @param {number} mod - 法
     * @return {number} - (base^exponent) mod mod の結果
     */
    static modPow(base, exponent, mod) {
        let result = 1;
        base %= mod;
        while (exponent > 0) {
            if (exponent & 1) result = (result * base) % mod;
            base = (base * base) % mod;
            exponent >>= 1;
        }
        return result;
    }

    /**
     * @description modが素数の場合の、a の法 mod における逆元を計算する。
     * @param {number} a - 対象の値
     * @param {number} mod - 素数のmod
     * @return {number} - a の逆元（mod mod）
     */
    static modInverse(a, mod) {
        return this.modPow(a, mod - 2, mod);
    }

    /**
     * @description NTT（数論的フーリエ変換）を用いた2つの配列の畳み込み（Convolution）を計算する。
     * @param {number[]} a - 変換対象の配列（長さは2のべき乗であること）
     * @param {boolean} invert - 逆変換を行うか否か
     */
    static ntt(a, invert) {
        const n = a.length;
        for (let i = 1, j = 0; i < n; i++) {
            let bit = n >> 1;
            for (; j & bit; bit >>= 1) j -= bit;
            j += bit;
            if (i < j) [a[i], a[j]] = [a[j], a[i]];
        }
        for (let len = 2; len <= n; len <<= 1) {
            let wlen = this.modPow(this.PRIMITIVE_ROOT, (this.MOD - 1) / len, this.MOD);
            if (invert) wlen = this.modInverse(wlen, this.MOD);
            for (let i = 0; i < n; i += len) {
                let w = 1;
                for (let j = 0; j < len >> 1; j++) {
                    const u = a[i + j];
                    const v = (a[i + j + (len >> 1)] * w) % this.MOD;
                    a[i + j] = (u + v) % this.MOD;
                    a[i + j + (len >> 1)] = (u - v + this.MOD) % this.MOD;
                    w = (w * wlen) % this.MOD;
                }
            }
        }
        if (invert) {
            const invN = this.modInverse(n, this.MOD);
            for (let i = 0; i < n; i++) a[i] = (a[i] * invN) % this.MOD;
        }
    }

    /**
     * @description NTTを用いた2つの配列の畳み込み（Convolution）を計算する。
     * 結果はサイズ (a.length + b.length - 1) の配列として返される。
     * @param {number[]} a - 最初の配列
     * @param {number[]} b - 2番目の配列
     * @return {number[]} - 畳み込み結果の配列（各値はmod MODで計算される）
     */
    static convolutionMod(a, b) {
        const n = a.length,
            m = b.length;
        let size = 1;
        while (size < n + m - 1) size <<= 1;
        const A = new Array(size).fill(0);
        const B = new Array(size).fill(0);
        for (let i = 0; i < n; i++) A[i] = ((a[i] % this.MOD) + this.MOD) % this.MOD;
        for (let i = 0; i < m; i++) B[i] = ((b[i] % this.MOD) + this.MOD) % this.MOD;
        this.ntt(A, false);
        this.ntt(B, false);
        for (let i = 0; i < size; i++) A[i] = (A[i] * B[i]) % this.MOD;
        this.ntt(A, true);
        A.length = n + m - 1;
        return A;
    }
}
