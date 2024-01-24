import { MantineProvider, createTheme, Button, CopyButton } from "@mantine/core";
import '@mantine/core/styles.css'
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';


export default function Home() {
  const theme = createTheme({
    fontFamily: 'Greycliff CF, sans-serif',
    colors: {
      'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
      'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    },
    
  });

 return (
  
    <MantineProvider theme={theme}>
      <main>
        
        <div className="space-y-6 text-center">
        <h1 className='text-black'>
          auth test
        </h1>
        <p className="text-black text-lg">
          A simple authentication service
        </p>
        <Button leftSection={<IconPhoto size={14} />} size="md" color="black">hello world!</Button>
       

        
        </div>
      </main>
    </MantineProvider>

 )
}
