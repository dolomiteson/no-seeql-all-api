module.exports = {
    format_dateTime: (date) => {
        if (date) {
            let dateVal = date.toISOString().split("T")[0];
            let time = date.toISOString().split("T")[1];
            let timeVal = time.split(".")[0];
            return dateVal + " " + timeVal + " UTC";
        }
    }
  };