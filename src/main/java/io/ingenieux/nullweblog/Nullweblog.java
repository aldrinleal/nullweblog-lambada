package io.ingenieux.nullweblog;

import com.amazonaws.services.lambda.runtime.Context;

import java.util.Date;
import java.util.Set;

import io.ingenieux.lambada.runtime.LambadaFunction;

public class Nullweblog {
    public static class CreatePostArgs {
        String title;

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        String content;

        public String getContent() {
            return content;
        }

        public void setContent(String content) {
            this.content = content;
        }

        Set<String> tags;

        public Set<String> getTags() {
            return tags;
        }

        public void setTags(Set<String> tags) {
            this.tags = tags;
        }
    }

    public static class CreatePostResult {
        String postSlug;

        public String getPostSlug() {
            return postSlug;
        }

        public void setPostSlug(String postSlug) {
            this.postSlug = postSlug;
        }

        Date lastUpdated;

        public Date getLastUpdated() {
            return lastUpdated;
        }

        public void setLastUpdated(Date lastUpdated) {
            this.lastUpdated = lastUpdated;
        }
    }

    @LambadaFunction(name="${lambda.prefix}_create_post")
    public CreatePostResult createPost(CreatePostArgs args, Context ctx) {
        CreatePostResult result = new CreatePostResult();

        result.setLastUpdated(new Date());
        result.setPostSlug(args.getTitle());

        return result;
    }
}
