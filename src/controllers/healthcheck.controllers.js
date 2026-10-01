import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/aync-handler.js";
/** 
 * old way
const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(
        new ApiResponse(200, { message: "Server is running successfully!" }),
      );
  } catch (error) {}
};
*/

//batter way to use try catch
const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Server Running Successfully!" }));
});

export { healthCheck };
