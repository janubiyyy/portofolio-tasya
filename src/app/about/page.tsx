import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import React from "react";
import { Meta, Schema } from "@/once-ui/modules";

// Utility function to convert JSX.Element to string
const elementToString = (element: string | JSX.Element): string => {
  if (typeof element === "string") return element;
  // Extract string content from JSX.Element (specific to <><Icon /> Text</> structure)
  return (
    (element as any).props?.children?.[1] ||
    (element as any).props?.children ||
    ""
  );
};

// Define TypeScript interfaces
interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Experience {
  company: string | JSX.Element;
  role: string | JSX.Element;
  timeframe: string | JSX.Element;
  achievements: JSX.Element[];
  images: Image[];
}

interface Institution {
  name: string | JSX.Element;
  description: string | JSX.Element;
}

interface Skill {
  title: string | JSX.Element;
  description: JSX.Element;
  images?: Image[];
}

interface AboutContent {
  title: string;
  description: string;
  path: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    title: string;
    display: boolean;
    description: JSX.Element;
  };
  work: {
    title: string;
    display: boolean;
    experiences: Experience[];
  };
  studies: {
    title: string;
    display: boolean;
    institutions: Institution[];
  };
  technical: {
    title: string;
    display: boolean;
    skills: Skill[];
  };
}

interface Person {
  name: string;
  role: string;
  avatar: string;
  location: string;
  languages: string[];
}

interface Social {
  name: string;
  link?: string;
  icon: string;
}

interface TableOfContentsStructure {
  title: string;
  display: boolean;
  items: string[];
}

// Type assertion to ensure `about` matches `AboutContent`
const typedAbout = about as AboutContent;

export async function generateMetadata() {
  return Meta.generate({
    title: typedAbout.title,
    description: typedAbout.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(typedAbout.title)}`,
    path: typedAbout.path,
  });
}

export default function About() {
  const structure: TableOfContentsStructure[] = [
    {
      title: typedAbout.intro.title,
      display: typedAbout.intro.display,
      items: [],
    },
    {
      title: typedAbout.work.title,
      display: typedAbout.work.display,
      items: typedAbout.work.experiences.map((experience) =>
        elementToString(experience.company)
      ),
    },
    {
      title: typedAbout.studies.title,
      display: typedAbout.studies.display,
      items: typedAbout.studies.institutions.map((institution) =>
        elementToString(institution.name)
      ),
    },
    {
      title: typedAbout.technical.title,
      display: typedAbout.technical.display,
      items: typedAbout.technical.skills.map((skill) =>
        elementToString(skill.title)
      ),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={typedAbout.title}
        description={typedAbout.description}
        path={typedAbout.path}
        image={`${baseURL}/og?title=${encodeURIComponent(typedAbout.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${typedAbout.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {typedAbout.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={typedAbout} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {typedAbout.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index: number) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={typedAbout.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {typedAbout.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{ backdropFilter: "blur(var(--static-space-1))" }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={typedAbout.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    )
                )}
              </Flex>
            )}
          </Column>

          {typedAbout.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {typedAbout.intro.description}
            </Column>
          )}

          {typedAbout.work.display && (
            <>
              <Heading
                as="h2"
                id={typedAbout.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {typedAbout.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {typedAbout.work.experiences.map(
                  (experience, index: number) => (
                    <Column
                      key={`${elementToString(
                        experience.company
                      )}-${elementToString(experience.role)}-${index}`}
                      fillWidth
                    >
                      <Flex
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        marginBottom="4"
                      >
                        <Text
                          id={elementToString(experience.company)}
                          variant="heading-strong-l"
                        >
                          {experience.company}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text
                        variant="body-default-s"
                        onBackground="brand-weak"
                        marginBottom="m"
                      >
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map(
                          (achievement: JSX.Element, index: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${elementToString(
                                experience.company
                              )}-${index}`}
                            >
                              {achievement}
                            </Text>
                          )
                        )}
                      </Column>
                      {experience.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                          {experience.images.map(
                            (image: Image, index: number) => (
                              <Flex
                                key={index}
                                border="neutral-medium"
                                radius="m"
                                minWidth={image.width}
                                height={image.height}
                              >
                                <SmartImage
                                  enlarge
                                  radius="m"
                                  sizes={image.width.toString()}
                                  alt={image.alt}
                                  src={image.src}
                                />
                              </Flex>
                            )
                          )}
                        </Flex>
                      )}
                    </Column>
                  )
                )}
              </Column>
            </>
          )}

          {typedAbout.studies.display && (
            <>
              <Heading
                as="h2"
                id={typedAbout.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {typedAbout.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {typedAbout.studies.institutions.map(
                  (institution, index: number) => (
                    <Column
                      key={`${elementToString(institution.name)}-${index}`}
                      fillWidth
                      gap="4"
                    >
                      <Text
                        id={elementToString(institution.name)}
                        variant="heading-strong-l"
                      >
                        {institution.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.description}
                      </Text>
                    </Column>
                  )
                )}
              </Column>
            </>
          )}

          {typedAbout.technical.display && (
            <>
              <Heading
                as="h2"
                id={typedAbout.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {typedAbout.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {(typedAbout.technical.skills as Skill[]).map(
                  (skill, index: number) => (
                    <Column
                      key={`${elementToString(skill.title)}-${index}`}
                      fillWidth
                      gap="4"
                    >
                      <Text variant="heading-strong-l">{skill.title}</Text>
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {skill.description}
                      </Text>
                      {skill.images && skill.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" gap="12" wrap>
                          {skill.images.map((image: Image, index: number) => (
                            <Flex
                              key={index}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Column>
                  )
                )}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
