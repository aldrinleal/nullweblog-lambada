// Generated using typescript-generator version 1.5-SNAPSHOT on 2016-03-01 06:53:04.

declare namespace Nullweblog {

    interface CreatePostArgs {
        title: string;
        content: string;
        tags: string[];
    }

    interface CreatePostResult {
        postSlug: string;
        lastUpdated: Date;
    }

}
