/*
  OUTLINE:
    boilerplate (hide the LLM functionality so I can replace it with a BNet, etc.
      get: filename, directory hierarchy
      put (feedback): filename, directory hierarchy, line/substring
*/

const express = require("express");
const router = express.Router();
const { textGeneration } = require("@huggingface/inference");

router.get("/:directory_hierarchy/:filename", async function (req, res, next) {
  const { directory_hierarchy, filename } = req.params;
  // ask req.llm about boilerplate code using "good" language
  // e.g., ~ help me create a script for **** in a *** project

  // const answer = await textGeneration({
  //   ...
  // });
});

module.exports = router;
