import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { BookmarkAdd } from "../functions/bookmarkadd";

export const BookmarkWorkflow = DefineWorkflow("bookmark-workflow", {
  title: "add bookmarks",
  description: "request to add url as a bookmark and responds to the user",
  input_parameters: {
    bookmark_name: {
      type: Schema.types.string,
      description: "Name of the bookmark",
    },
    Bookmark_url: {
      type: Schema.types.string,
      description: "complete url",
    },
    user_id: {
      type: Schema.types.user_id,
      description: "Users id",
    },
  },
});

const logRequest = BookmarkWorkflow.addStep(BookmarkAdd, {
  bookmark_name: BookmarkWorkflow.inputs.bookmark_name,
  bookmark_url: BookmarkWorkflow.inputs.bookmark_url,
  user_id: BookmarkWorkflow.inputs.user_id,
});

BookmarkWorkflow.addStep(Schema.slack.functions.SendMessage, {
  message:
    `Your equipment request for *${BookmarkWorkflow.inputs.bookmark_name}* has been added. Your request ID is: ${logRequest.outputs.bookmark_id}}`,
});
