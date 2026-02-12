import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "rn-cn-ui/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "rn-cn-ui/components/ui/card";
import { Text } from "rn-cn-ui/components/ui/text";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const barData = [
  { value: 186, label: "Jan", frontColor: chartConfig.desktop.color },
  { value: 305, label: "Feb", frontColor: chartConfig.desktop.color },
  { value: 237, label: "Mar", frontColor: chartConfig.desktop.color },
  { value: 73, label: "Apr", frontColor: chartConfig.desktop.color },
  { value: 209, label: "May", frontColor: chartConfig.desktop.color },
  { value: 214, label: "Jun", frontColor: chartConfig.desktop.color },
];

const lineData = [
  { value: 186, label: "Jan", dataPointColor: chartConfig.desktop.color },
  { value: 305, label: "Feb", dataPointColor: chartConfig.desktop.color },
  { value: 237, label: "Mar", dataPointColor: chartConfig.desktop.color },
  { value: 73, label: "Apr", dataPointColor: chartConfig.desktop.color },
  { value: 209, label: "May", dataPointColor: chartConfig.desktop.color },
  { value: 214, label: "Jun", dataPointColor: chartConfig.desktop.color },
];

const pieData = [
  { value: 50, color: chartConfig.desktop.color, text: "50%" },
  { value: 20, color: chartConfig.mobile.color, text: "20%" },
  { value: 30, color: "gray", text: "30%" },
];

export default function ChartScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Charts</Text>
      
      <View className="gap-8 pb-10">
        {/* Bar Chart */}
        <Card>
            <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        data={barData}
                        barWidth={22}
                        noOfSections={3}
                        barBorderRadius={4}
                        frontColor={chartConfig.desktop.color}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        hideRules
                        width={screenWidth - 80}
                        height={200}
                        isAnimated
                    />
                </ChartContainer>
            </CardContent>
        </Card>

        {/* Line Chart */}
        <Card>
            <CardHeader>
                <CardTitle>Line Chart</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        data={lineData}
                        color={chartConfig.desktop.color}
                        thickness={2}
                        startFillColor={chartConfig.desktop.color}
                        endFillColor={chartConfig.desktop.color}
                        startOpacity={0.2}
                        endOpacity={0.0}
                        areaChart
                        yAxisThickness={0}
                        xAxisThickness={0}
                        hideRules
                        hideDataPoints={false}
                        width={screenWidth - 80}
                        height={200}
                        curved
                        isAnimated
                    />
                </ChartContainer>
            </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
            <CardHeader>
                <CardTitle>Pie Chart</CardTitle>
                <CardDescription>Device Usage</CardDescription>
            </CardHeader>
            <CardContent className="items-center">
                <ChartContainer config={chartConfig}>
                    <PieChart
                        data={pieData}
                        donut
                        showText
                        textColor="white"
                        radius={100}
                        innerRadius={60}
                        textSize={14}
                        focusOnPress
                        toggleFocusOnPress
                    />
                </ChartContainer>
                <ChartLegend>
                    <ChartLegendContent>
                        <View className="h-3 w-3 bg-blue-600 rounded-full" />
                        <Text className="text-sm">Desktop</Text>
                    </ChartLegendContent>
                    <ChartLegendContent>
                        <View className="h-3 w-3 bg-blue-400 rounded-full" />
                        <Text className="text-sm">Mobile</Text>
                    </ChartLegendContent>
                </ChartLegend>
            </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
