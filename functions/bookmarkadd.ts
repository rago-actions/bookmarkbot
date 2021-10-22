import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";
import { Bookmarks } from "../tables/bookmarks-table.ts";

export const BookmarkAdd = DefineFunction(
  "bookmarkadd",
  {
    title: "BookmarkAdd",
    description: "adds a link as a bookmark",
    input_parameters: {
      id: {
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
      user: {
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
  async ({ inputs, client }) => {
    console.log(
      `adding a bookmark Bookmarkname = ${inputs.bookmark_name} BookamrkURL = ${inputs.bookmark_url} for ${inputs.user}`,
    );

    //generate the ID
    const bookmarkid = crypto.randomUUID();

    //shorthand for referencing the bookmarks table
    const bookmarksTable = Bookmarks.api(client);

    //add the request
    const result = await bookmarksTable.put({
      id: bookmarkid,
      bookmark_name: inputs.bookmark_name,
      bookmark_url: inputs.bookmark_url,
      user: inputs.user,
    });
    console.log(`bookmark added ${JSON.stringify(result)}`);

    const sucessMessage =
      `Bookmark added name = ${inputs.bookmark_name} URL = ${inputs.bookmark_url}`;

    return await {
      outputs: { user_private_message: sucessMessage },
    };
  },
);
