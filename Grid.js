// 四方位ベクトル
const dir4 = [[-1, 0], [1, 0], [0, -1], [0, 1]];

// 八方位ベクトル
const dir8 = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

// 壁に囲まれたグリッドの作成
function makegrid(h, w, map) {
    const grid = [new Array(w + 2).fill(true)];
    for (let i = 1; i <= h; i++) {
        grid[i] = [true];
        for (let j = 0; j < w; j++) grid[i].push(map[i - 1][j] === `#`);
        grid[i].push(true);
    }
    grid.push(new Array(w + 2).fill(true));
    return grid;
}

// マンハッタン距離
const mdist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

// ユークリッド距離
const dist = (a, b) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);