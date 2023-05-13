
const minCuts=(desired, original)=>{
    const n = desired.length;
    const m = original.length;
    const dp = Array.from({length:n + 1}, () => Array.from({length:m + 1}, () => 0));
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (desired[i - 1] === original[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    console.log(dp[n][m])
    return dp[n][m];
}



minCuts([1,4,3,2],[1,2,3,4])
