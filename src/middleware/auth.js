const adminAuth=(req,res,next)=>{
     console.log("Middleware called admin");
  const token = "xyz";
  const isAuthorized = token === "xyz";

  if (!isAuthorized) {
    res.status(401).send("user is not authorized");
  } else {
    next();
  }
}

const userAuth=(req,res,next)=>{
     console.log("Middleware called user");
  const token = "xyz1";
  const isAuthorized = token === "xyz";

  if (!isAuthorized) {
    res.status(401).send("user is not authorized");
  } else {
    next();
  }
}

module.exports={adminAuth,userAuth}