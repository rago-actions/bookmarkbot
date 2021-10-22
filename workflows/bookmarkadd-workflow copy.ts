import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { BookmarkAdd } from "../functions/bookmarkadd.ts";

export const BookmarkWorkflow = DefineWorkflow("bookmark-workflow", {
  title: "add bookmarks",
  description: "request to add url as a bookmark and responds to the user",
  input_parameters: {
    id: {
      type: Schema.types.string,
    },
    bookmark_name: {
      type: Schema.types.string,
      description: "Name of the bookmark",
    },
    bookmark_url: {
      type: Schema.types.string,
      description: "Bookmark URL",
    },
    user: {
      type: Schema.slack.types.user_id,
      description: "Users id",
    },
  },
});

const _logRequest = BookmarkWorkflow.addStep(BookmarkAdd, {
  id: BookmarkWorkflow.inputs.id,
  bookmark_name: BookmarkWorkflow.inputs.bookmark_name,
  bookmark_url: BookmarkWorkflow.inputs.bookmark_url,
  user: BookmarkWorkflow.inputs.user,
});
