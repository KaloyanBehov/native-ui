import React from "react";
import { ScrollView, TextInput } from "react-native";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
} from "rn-cn-ui/components/ui/field";
import { Checkbox } from "rn-cn-ui/components/ui/checkbox";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";

export default function FieldScreen() {
  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Field</Text>
      
      <FieldSet className="gap-6">
        <FieldLegend>Account Settings</FieldLegend>
        
        <FieldGroup>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <FieldContent>
              <TextInput 
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
                placeholder="Enter username"
                placeholderTextColor="hsl(var(--muted-foreground))"
              />
              <FieldDescription>This is your public display name.</FieldDescription>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldContent>
              <TextInput 
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
                placeholder="Enter email"
                placeholderTextColor="hsl(var(--muted-foreground))"
              />
              <FieldError errors={[{ message: "Email is required" }]} />
            </FieldContent>
          </Field>
        </FieldGroup>

        <FieldSeparator>OR</FieldSeparator>

        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <FieldContent>
              <FieldLabel>Subscribe to newsletter</FieldLabel>
              <FieldDescription>
                Receive updates about new features and releases.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
        
        <Button label="Save Changes" onPress={() => {}} />
      </FieldSet>
    </ScrollView>
  );
}
