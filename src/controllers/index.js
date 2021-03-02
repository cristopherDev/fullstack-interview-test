const axios = require('axios');
const { URL_REPO, URL_BRANCHES } = require('../constants');

async function infoRepo(req, res) {
    try {
        var resInfoRepo = await axios.get(URL_REPO);

        res.json({ info_repo: resInfoRepo.data });
    } catch (error) {
        res.json({ message: error });
    }
}

async function listBranches(req, res) {
    try {
        var resListBranches = await axios.get(URL_BRANCHES);

        res.json({ list_branches: resListBranches.data });
    } catch (error) {
        res.json({ message: error });
    }
}

async function commitsBranch(req, res) {
    try {
        const { url_commits } = req.body;

        var resCommitsBranch = await axios.get(url_commits);

        res.json({ commits: resCommitsBranch.data });
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    infoRepo,
    listBranches,
    commitsBranch
}