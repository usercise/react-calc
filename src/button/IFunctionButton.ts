export interface FunctionButtonProps {
  number: number;
  displayValue: string;
  updateValue: (newValue: number, isEditing: boolean) => void;
}
