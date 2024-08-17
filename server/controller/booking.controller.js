import { catchAsyncError } from "../middleware/catchAsyncError";

export const bookRoom = catchAsyncError(async (req, res, next) => {

    res.status(200).json({
        success: true,
        message: 'DOne'
    });

});