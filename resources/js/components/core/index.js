class APIModel {
    // static HOST = "http://127.0.0.1:8000/api/v1/";
    // static URL = "http://127.0.0.1:8000/";

    static BASE_URL = "http://127.0.0.1:8000";
    static HOST = `${APIModel.BASE_URL}/api/v1`;
    static ASSETS_URL = `${APIModel.BASE_URL}/assets`;
    static IMAGES_URL = `${APIModel.ASSETS_URL}/images`;
    static VIDEOS_URL = `${APIModel.ASSETS_URL}/videos`;
    static THUMNAILS_VIDEO_URL = `${APIModel.ASSETS_URL}/thumnails/videos`;
}

export default APIModel;
