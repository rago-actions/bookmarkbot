import { DefineTable, Schema } from "slack-cloud-sdk/mod.ts";

// Here's a sample Table definition :)
// To include this in your project, you'll want to add it in your project.ts like so:
/**
 * // Import it into project.ts
 * import { DinosTable } from "./tables/dinos.ts";
 *
 * // Register it in the Project() call alongside your other configuration
 * Project({
 *   ...
 *   tables: [DinosTable],
 * });
 */
export const Bookmarks = DefineTable("bookmarks", {
  primary_key: "id",
  columns: {
    id: {
      type: Schema.types.string,
    },
    bookmark_name: {
      type: Schema.types.string,
    },
    bookmark_url: {
      type: Schema.types.string,
    },
    user: {
      type: Schema.slack.types.user_id,
    },
  },
});
