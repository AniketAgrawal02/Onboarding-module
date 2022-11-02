module.exports = {
    port: process.env.PORT || 9027,
    db: process.env.MONGO_ONEVIEW_URI || "MONGO_ONEVIEW_URI",
    mkOneview: process.env.MONGO_ONEVIEW_URI || "MONGO_ONEVIEW_URI",
};
