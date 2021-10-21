import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { BookmarkWorkflow } from "../workflows/bookmarkadd-workflow";

export const BookmarkSlashCmd = DefineTrigger("bookmark_slash_command", {
  type: TriggerTypes.SlashCommand,
  name: "/bookmark add",
  usage_hint: "Would you like to add a bookmark?",
  description: "adds new bookmark ( needs name of the book, complete url)",
})
  .runs(BookmarkWorkflow)
  .withInputs((ctx) => ({
    user_id: ctx.data.user_id,
    bookmark_name: ctx.data.command.text,
    bookmark_url: ctx.data.command.text,
  }));
