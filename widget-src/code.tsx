const { widget } = figma;
const { Frame, useStickable, useWidgetNodeId, AutoLayout, Text } = widget;

function Widget() {
  const widgetId = useWidgetNodeId();

  useStickable(() => {});

  return (
    <AutoLayout
      direction="vertical"
      spacing={10}
      padding={{ vertical: 10, horizontal: 20 }}
      fill={"#1e40e8"}
      stroke={"#FFFFFF80"}
      strokeWidth={3}
      cornerRadius={24}
      onClick={async () => {
        const widget = await figma.getNodeByIdAsync(widgetId);

        const { stuckTo } = widget;

        if (stuckTo) {
          const cloned = stuckTo.clone();

          cloned.y = stuckTo.y + stuckTo.height + 10;

          console.log("stuckTo");
        } else {
          const parent = widget?.parent;

          if (parent) {
            const cloned = parent.clone();

            cloned.y = parent.y + parent.height + 10;

            console.log("stuckTo");
          } else {
            console.log("not stuckTo");
          }
        }
      }}
    >
      <Text fontWeight={"bold"} fontSize={36} fill={"#FFFFFF"}>
        Duplicate
      </Text>
    </AutoLayout>
  );
}

widget.register(Widget);
