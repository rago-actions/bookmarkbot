import { Project } from "slack-cloud-sdk/mod.ts";
import { BookmarkList } from "./functions/bookmarklist.ts";
import { BookmarkAdd } from "./functions/bookmarkadd.ts";
import { BookmarkWorkflow } from "./workflows/bookmarkadd-workflow.ts";
import { BookmarkSlashCmd } from "./triggers/bookmark_slash_command.ts";
import { Bookmarks } from "./tables/bookmarks-table.ts";

Project({
  name: "BookmarkBot",
  description: "An app to list/add/update/delete bookmarks",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "chat:users.list",
    "chat:conevrsations.list",
  ],
  functions: [BookmarkList, BookmarkAdd],
  workflows: [BookmarkWorkflow],
  triggers: [BookmarkSlashCmd],
  tables: [Bookmarks],
  outgoingDomains: [],
});
