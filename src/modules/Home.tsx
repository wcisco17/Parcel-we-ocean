import swal from '@sweetalert/with-react';
import * as React from 'react';
import { theme } from '../assets/theme';
import Button from '../components/Button';
import { QrCodeReader } from './QrCodeReader';

export const Home = () => {
    const [result] = React.useState(null);

    const handleScan = (data: any) => {
        if (data) {
            localStorage.setItem('@QR_DATA', data);
            swal.close();
        }
    }

    const handleError = (err: any) => {
        console.error(err)
    }

    const modal = () => swal({
        text: "Please Login",
        buttons: {
            cancel: "Close",
        },
        content: (
            <QrCodeReader
                data={result}
                handleError={handleError}
                handleScan={handleScan}
            />
        )
    });

    return (
        <div>
            <Button
                backgroundColor={theme.colors.primary}
                textColor={theme.colors.white}
                onClick={() => modal()}
                text='Read Qr Code'
            />
        </div>
    )
}
