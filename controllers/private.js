exports.getPrivateData = (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'ye',
		chatIDS: req.user.chatID,
	});
};
