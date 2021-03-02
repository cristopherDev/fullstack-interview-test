const URL_API = "http://localhost:3000/api";

const app = new Vue({
    el: '#app',
    data: {
      repoInfo: []
    },
    created() {
        (async () => {
            try {
                var getInfoRepo = await fetch(`${URL_API}/info_repo`);
                var res = await getInfoRepo.json();

                this.repoInfo.push(res.info_repo);
            } catch (error) {
                console.error(error);
            }
        })();
    }
})
  