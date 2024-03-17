"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, Button, Carousel, Space, Typography, Flex, List } from "antd";
import { classesData } from "../../data/classes";
import ContentContainer from "@/app/components/shared/ContentContainer";
import AbilityScore from "@/app/components/AbilityScore/AbilityScore";
import localForage from "localforage";

const { Title, Paragraph, Text } = Typography;

const ClassSelectionScreen = () => {
  const router = useRouter();

  const onClassSelection = (className) => {
    localForage
      .setItem("userClass", className)
      .then((value) => {
        router.push("/overview");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ContentContainer>
      <Space direction="vertical" size="large" className="w-full">
        <Title level={2} className="text-xl text-center font-bold">
          Your Ability Scores
        </Title>
        <Flex wrap="wrap" justify="center" className="mb-8">
          <AbilityScore type="Strength" value={15} />
          <AbilityScore type="Dexterity" value={15} />
          <AbilityScore type="Constitution" value={15} />
          <AbilityScore type="Intelligence" value={15} />
        </Flex>

        <Paragraph className="text-center">
          Based on your fitness test results, these ability scores reflect your
          current strengths and possibly weaknesses. Now, choose your class to
          start a personalized fitness journey that aligns with your abilities.
          Each class focuses on enhancing specific attributes and skills,
          ensuring a balanced and effective workout regime. Choose a class with
          attributes that you wish to improve upon. Choose Wisely!
        </Paragraph>

        <Carousel dotPosition="bottom" className="py-10">
          {classesData.map((cls) => (
            <Card key={cls.name} title={cls.name} className="text-center">
              <Space direction="vertical" size="middle">
                <Paragraph>{cls.description}</Paragraph>
                <div>
                  <Text strong>Focus:</Text> {cls.mainFocus} (Primary),{" "}
                  {cls.secondaryFocus} (Secondary)
                </div>
                <div>
                  <Text strong>Example Exercises:</Text>
                  <List bordered>
                    {cls.exampleExercises.map((exercise, index) => (
                      <List.Item key={index}>{exercise}</List.Item>
                    ))}
                  </List>
                </div>
                <Button
                  type="primary"
                  onClick={() => onClassSelection(cls.name)}
                >
                  Select {cls.name}
                </Button>
              </Space>
            </Card>
          ))}
        </Carousel>
      </Space>
    </ContentContainer>
  );
};

export default ClassSelectionScreen;
