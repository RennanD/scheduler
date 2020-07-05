class AppError {

  run({message, statusCode = 400}) {
    return {
      message: message,
      statusCode: statusCode
    }
  }

}

module.exports =  AppError;