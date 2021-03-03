const URL_API = "http://localhost:3000/api";

const app = new Vue({
    el: '#app',
    data: {
      repoInfo: [],
      listBranches: [],
      commits: [],
      currentBranch: "Main"
    },
    created() {
        (async () => {
            try {
                var getInfoRepo = await fetch(`${URL_API}/info_repo`);
                var resInfoRepo = await getInfoRepo.json();

                var getBranches = await fetch(`${URL_API}/list_branches`);
                var resBranches = await getBranches.json();

                this.repoInfo.push(resInfoRepo.info_repo);
                this.listBranches = resBranches.list_branches;
            } catch (error) {
                console.error(error);
            }
        })();
    },
    methods: {
        getCommits: async (url) => {
            try {
                console.log(url)
                var data = { url_commits: url };
                var getCommits = await fetch(`${URL_API}/commits_branch`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers:{
                    'Content-Type': 'application/json'
                    }
                })
                var resCommits = await getCommits.json();

                console.log(resCommits);
            } catch (error) {
                console.error(error);
            }
        }
    }
})
  