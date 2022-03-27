import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5BJREFUeNq8Vy2X2lAQDTl4+AesaG2jEK0IptgoKonZtakBi4pdzGJZE2zMxrYGRCtWBdlWLP8g/Qed2b3Tc3kEyKEfOWfOC2He3Pme91pew+frq3eBLJHQQCg8wrYRWgsVb398KZvIbTUAVtCZUEAgKrzCuweFuuAx5ZQnFUWKixQQ4J4s9xC4E7oTWgFEhXcUVC0V3pmj3Fjoo1AP366Fb9dYAVi9xM9UXQovRLC0pG99oUfarp5ZgMbg0eemzht+DXgsSw6rhwD8LhQDNKVwKNhcaILf+v8WoN/wbQhZOWQfV4AsVwtHeJ9B8GuxQK1I4dYYVob4vUNI3sMrWyg3gyyVuQTGoQKIOYPnsFRBR04MHxDfgpKwsATUvIAiKcKWO0r06jxwj3VK4H0RlNWkyRZrl9bKZYK3biBrjnfGelEAbglJY7O89Jo/3bqPMMDkGkZooTAPzBBDdWOCRpKdAAspCW0NqS/UeWIDnBWwnqvDR4cLUOdWMpMz1saIpyXUT8h4OLEnhZcSYAWK7ZOQAoKzY02DWnIPFZDAsgheWB3bJzLXVD3GF/no7Ruq7eKM9RG5XS3K8G0lINWZvRmUtw458BG70hQ417upFQdOHhQNEnVNOaQywjYJGeBj3Uy4Is0NeOB4ZCy8PIg0L544nPouPHtl26YhMsAmBVWGW+r9FdW+B0VMsK1XII9HtsjawfIpQlRi/4oVcJ+Eev8CCWQeSdBU1jQpTWif84BGeQy+1Iy0p+3UdYeSJYEHIrjN3NqhXPDgKUviR1jcof9t74KwTPnfjaiLj5aINgkrJ/lCEhzR3ohCEzrgFbpqRTPAKuhZgQ1ltrnNQxueen/2KNCQWvqAcu65c/rkjtKxjPv4pY87TywXdjB67VP9Roh9zOMSfTy7ELxwOmgIWWPrHT40LHGGM2vnjrBpXY84A+4qPafjmmLpmaH0aVD04IUFMj8mL1RIyk2DmB+Ao3RtFI+Ble4dSoXpsyxvhD6gtOxAUhJPTnItjhVldYBhljpnzCWU1yn7SZsaTkx7jegap9tbOpJpXbNFazSW7omLSVbTtErIzwnr8FiOEsxrzoWaTBP0cvcCYt4ozVvOnWJD4LpvxMnZOnIst8PpFHmRUIcs6iYmFAtRahElXAF5QV1+XHox8aiePZqUHh1M7sB/8mJyydXMWm1AyjyB5+9czc5cTksI/beX0/91Pf8lwABa47Rm6ngS/gAAAABJRU5ErkJggg=="
        width="32"
      ></image>
    </Svg>
  );
};

export default Icon;
