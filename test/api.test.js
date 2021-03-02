const request = require('supertest');
const app = require('../src/server');

const URL_TEST_COMMITS = "https://api.github.com/repos/cristopherDev/fake-repo/commits/1775f84542fffdf9442a291e66faadd90fceceac";

describe("Get Endpoints", () => {
  it("should clone repo", async () => {
    const res = await request(app).get("/api/info_repo");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('info_repo');
  });

  it("get list branches", async () => {
    const res = await request(app).get("/api/list_branches");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('list_branches');
  });

  it("get commits branch", async () => {
    const res = await request(app)
    .post("/api/commits_branch")
    .send({
        url_commits: URL_TEST_COMMITS
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('commits');
  });
});
