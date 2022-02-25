const logOut = (app) => {
	app.get("/logout", (req, res) => {
		req.logout();
		res.redirect("/login");
	});
};

export default logOut;
