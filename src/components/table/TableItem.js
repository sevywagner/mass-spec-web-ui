const TableItem = ({ compound, pred, ppm }) => {
    return (
        <tr>
            <td>{compound}</td>
            <td>{pred}%</td>
            <td>{ppm}</td>
        </tr>
    );
}

export default TableItem;