
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"

type PopupProps = {
    headerText: string;
    description?: string;
    confirmText: string;
    buttonText: string;
    buttonColor: string;
    buttonTextColor: string;
    barColor: string;
}

const PopupNotification = ({headerText, confirmText, buttonText, buttonTextColor, barColor}: PopupProps) => {
    return (
        <div>
            <Alert>

            </Alert>
        </div>
    )
}