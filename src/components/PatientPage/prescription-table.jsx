import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const PrescriptionTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>Patient Information</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Dosage</TableHead>
                        <TableHead>Instruction</TableHead>
                        <TableHead>Quantity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Adderall</TableCell>
                        <TableCell>1 M</TableCell>
                        <TableCell>Before meal</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Adderall</TableCell>
                        <TableCell>1 M</TableCell>
                        <TableCell>Before meal</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Adderall</TableCell>
                        <TableCell>1 M</TableCell>
                        <TableCell>Before meal</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default PrescriptionTable;
