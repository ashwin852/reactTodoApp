const apiRequest = async (url = "", optionObj = null, errMsg) => {
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw "Please restart the app real quick!!!";
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
