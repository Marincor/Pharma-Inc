
export default function loadingMore(funcLoadResults, results, funcIsLoading) {
    funcLoadResults(results + 50);
    funcIsLoading(true);
    setTimeout(() => {
        funcIsLoading(false);
    }, 2000);
  }