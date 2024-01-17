import dynamic from 'next/dynamic';
import LayoutPage from "@/layout/layoutPage";

const DynamicIframe = dynamic(() => import('react').then((React) => {
  return React.forwardRef((props, ref) => (
    <iframe
      ref={ref}
      {...props}
    />
  ));
}), { ssr: false });

export default function Home() {
  return (
    <LayoutPage>
      <div className='w-full items-center justify-center flex py-8'>
        <DynamicIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.2288566422233!2d30.533108528559623!3d50.44267595229953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfab08918e9d%3A0xb774c3707d6652a4!2z0YPQuy4g0JvQuNC_0YHQutCw0Y8sIDE5LzcsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sua!2sua!4v1705427634177!5m2!1sua!2sua"
          width="50%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </LayoutPage>
  );
}
