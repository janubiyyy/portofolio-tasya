import { Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { person, newsletter } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Heading marginBottom="l" variant="display-strong-s"></Heading>
      <Column fillWidth flex={1}>
        <Posts range={[1, 1]} thumbnail direction="column" />
        <Posts range={[2, 3]} thumbnail />
        <Posts range={[4]} columns="2" />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
