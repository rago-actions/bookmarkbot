import { DefineFunction, Schema } from "slack-cloud-sdk/mod";
import { _Bookmarks } from "./tables/bookmarks-table.ts";

export const BookmarkUpdate = DefineFunction(
  "bookmarkupdate",
  {
    title: "BookmarkUpdate",
    description: "Updates new link with an existing bookmark link",
    input_parameters: {
      bookmark_id: {
        type: Schema.types.string,
        description: "Unique id for the bookmark",
      },
      bookmark_name: {
        type: Schema.types.string,
        description: "Bookmark name",
      },
      bookmark_url: {
        type: Schema.types.string,
        description: "bookmark complete url",
      },
      user_id: {
        type: Schema.slack.types.user_id,
        description: "The requester user id",
      },
    },
    output_parameters: {
      user_private_message: {
        type: Schema.types.string,
        description:
          "The message user receives after adding an URL the users bookmark list",
      },
    },
  },
);
