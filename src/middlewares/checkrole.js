const CheckRole = (role) => {
    return (req, res, next) => {
      const { user } = req;
      if (role === "admin") {
        if (user.role === "admin") return next();
        else return res.status(403).json({ message: "Permission denied for admin role" });
      } else if (role === "teacher") {
        if (user.role === "teacher") return next();
        else return res.status(403).json({ message: "Permission denied for teacher role" });
      } else if (role === "student") {
        if (user.role === "student") return next();
        else return res.status(403).json({ message: "Permission denied for student role" });
      } else {
        return res.status(403).json({ message: "Invalid role" });
      }
    };
  };
  