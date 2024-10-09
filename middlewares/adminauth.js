const auth = (req, res, next) => {
  const token = "1Q2W3E_21";
  var isAdmin = false;
  if (token === "1Q2W3E_21") {
    isAdmin = true;
  }
  console.log("running admin auth middleware");
  if (!isAdmin) {
    res.status(401).send("unauthorised user");
  } else {
    next();
  }
};

module.exports = {
  auth,
};
