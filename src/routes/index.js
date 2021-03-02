const { Router } = require('express');
const router = Router();
const {
    infoRepo,
    listBranches,
    commitsBranch,
} = require('../controllers');

router
.get('/info_repo', infoRepo)
.get('/list_branches', listBranches)
.post('/commits_branch', commitsBranch)

module.exports = router;
