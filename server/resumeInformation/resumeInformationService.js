module.exports.validateAccessToData = (userId, documentId) => {
    console.log(userId)
    if (String(userId) != String(documentId)) {
        return 'not authorized'
    }
}
