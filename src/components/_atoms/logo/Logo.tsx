import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './logo.module.scss';

const ProductCard: FC = (): ReactElement => {
  return (
    <article className={styles.logo}>
      <svg className={styles.logo__svg} viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.35742 0.457031L8.81836 9.05859L6.14648 9.17578L6.16992 4.64062L4.96289 8.29688H3.93164L3.00586 5.02734L2.99414 8.82422L0.287109 8.90625L0.404297 0.808594L3.41602 0.691406L4.61133 4.57031L6.20508 0.457031H9.35742ZM16.8633 7.80469C16.6797 8.03516 16.4531 8.23633 16.1836 8.4082C15.9141 8.58008 15.625 8.72266 15.3164 8.83594C15.0078 8.94922 14.6914 9.0332 14.3672 9.08789C14.043 9.14648 13.7344 9.17578 13.4414 9.17578C12.875 9.17578 12.3535 9.07422 11.877 8.87109C11.4004 8.66797 10.9883 8.38867 10.6406 8.0332C10.2969 7.67383 10.0273 7.25195 9.83203 6.76758C9.63672 6.2832 9.53906 5.76172 9.53906 5.20312C9.53906 4.77734 9.58789 4.36133 9.68555 3.95508C9.7832 3.54492 9.92188 3.16016 10.1016 2.80078C10.2852 2.4375 10.5078 2.10547 10.7695 1.80469C11.0312 1.5 11.3281 1.23828 11.6602 1.01953C11.9922 0.800781 12.3555 0.630859 12.75 0.509766C13.1445 0.388672 13.5664 0.328125 14.0156 0.328125C14.1836 0.328125 14.3633 0.335937 14.5547 0.351562C14.7461 0.363281 14.9355 0.386719 15.123 0.421875C15.3145 0.453125 15.5 0.498047 15.6797 0.556641C15.8594 0.615234 16.0234 0.6875 16.1719 0.773438L16.0078 3.01172C15.7891 2.92969 15.5625 2.875 15.3281 2.84766C15.0977 2.81641 14.8711 2.80078 14.6484 2.80078C14.3359 2.80078 14.043 2.84961 13.7695 2.94727C13.5 3.04102 13.2637 3.17773 13.0605 3.35742C12.8613 3.53711 12.7031 3.75586 12.5859 4.01367C12.4688 4.27148 12.4102 4.5625 12.4102 4.88672C12.4102 5.08984 12.4375 5.28711 12.4922 5.47852C12.5469 5.66602 12.6289 5.83398 12.7383 5.98242C12.8516 6.12695 12.9902 6.24414 13.1543 6.33398C13.3223 6.42383 13.5156 6.46875 13.7344 6.46875C13.8828 6.46875 14.0352 6.44922 14.1914 6.41016C14.3516 6.37109 14.4883 6.30469 14.6016 6.21094L14.625 5.75391L13.2188 5.73047L13.2891 3.97266C13.8711 3.95312 14.4531 3.9375 15.0352 3.92578C15.6172 3.91016 16.2031 3.89062 16.793 3.86719L16.8633 7.80469ZM24.1816 3.35156C24.1816 3.65625 24.1543 3.93359 24.0996 4.18359C24.0488 4.42969 23.9668 4.65625 23.8535 4.86328C23.7402 5.07031 23.5938 5.26172 23.4141 5.4375C23.2344 5.61328 23.0176 5.78125 22.7637 5.94141L24.1582 8.42578L21.5215 8.94141L20.6191 6.44531L19.8926 6.46875L19.7871 8.90625H17.2676C17.2871 8.01562 17.3047 7.12891 17.3203 6.24609C17.3398 5.36328 17.3613 4.47656 17.3848 3.58594C17.3926 3.13672 17.4004 2.69141 17.4082 2.25C17.416 1.80859 17.4316 1.36328 17.4551 0.914062C17.7285 0.8125 17.998 0.728516 18.2637 0.662109C18.5293 0.595703 18.7949 0.544922 19.0605 0.509766C19.3301 0.470703 19.6016 0.445312 19.875 0.433594C20.1523 0.417969 20.4355 0.410156 20.7246 0.410156C21.1699 0.410156 21.5996 0.472656 22.0137 0.597656C22.4316 0.71875 22.8008 0.902344 23.1211 1.14844C23.4414 1.39453 23.6973 1.70117 23.8887 2.06836C24.084 2.43555 24.1816 2.86328 24.1816 3.35156ZM21.5566 3.53906C21.5566 3.375 21.5332 3.22461 21.4863 3.08789C21.4434 2.95117 21.377 2.83398 21.2871 2.73633C21.2012 2.63477 21.0918 2.55664 20.959 2.50195C20.8301 2.44336 20.6777 2.41406 20.502 2.41406C20.4238 2.41406 20.3477 2.41992 20.2734 2.43164C20.1992 2.43945 20.127 2.45313 20.0566 2.47266L19.9629 4.65234H20.1035C20.2715 4.65234 20.4414 4.63086 20.6133 4.58789C20.7891 4.54492 20.9453 4.47852 21.082 4.38867C21.2227 4.29883 21.3359 4.18359 21.4219 4.04297C21.5117 3.90234 21.5566 3.73438 21.5566 3.53906ZM31.0723 4.26562C31.0723 4.60547 31.0488 4.94531 31.002 5.28516C30.334 5.32812 29.6699 5.39844 29.0098 5.49609C28.3496 5.58984 27.6895 5.68359 27.0293 5.77734C27.1309 6.05859 27.2891 6.2832 27.5039 6.45117C27.7227 6.61914 27.9824 6.70312 28.2832 6.70312C28.4395 6.70312 28.6094 6.67383 28.793 6.61523C28.9805 6.55664 29.166 6.48438 29.3496 6.39844C29.5332 6.30859 29.709 6.21289 29.877 6.11133C30.0449 6.00977 30.1895 5.91797 30.3105 5.83594L30.0293 8.49609C29.877 8.61328 29.7109 8.71289 29.5312 8.79492C29.3555 8.87695 29.1719 8.94336 28.9805 8.99414C28.7891 9.04492 28.5957 9.08203 28.4004 9.10547C28.2051 9.12891 28.0137 9.14062 27.8262 9.14062C27.4395 9.14062 27.0859 9.08789 26.7656 8.98242C26.4453 8.87695 26.1543 8.73047 25.8926 8.54297C25.6348 8.35156 25.4082 8.12695 25.2129 7.86914C25.0176 7.61133 24.8555 7.33008 24.7266 7.02539C24.5977 6.7207 24.5 6.39844 24.4336 6.05859C24.3672 5.71875 24.334 5.375 24.334 5.02734C24.334 4.66406 24.3672 4.30078 24.4336 3.9375C24.5 3.57422 24.5996 3.22461 24.7324 2.88867C24.8691 2.55273 25.0391 2.24219 25.2422 1.95703C25.4492 1.66797 25.6895 1.41602 25.9629 1.20117C26.2363 0.986328 26.5449 0.818359 26.8887 0.697266C27.2363 0.576172 27.6191 0.515625 28.0371 0.515625C28.3848 0.515625 28.7012 0.564453 28.9863 0.662109C29.2754 0.755859 29.5312 0.888672 29.7539 1.06055C29.9805 1.22852 30.1758 1.42969 30.3398 1.66406C30.5078 1.89844 30.6445 2.15625 30.75 2.4375C30.8594 2.71484 30.9395 3.00977 30.9902 3.32227C31.0449 3.63086 31.0723 3.94531 31.0723 4.26562ZM28.7285 3.96094C28.7285 3.85156 28.7168 3.74023 28.6934 3.62695C28.6699 3.50977 28.6309 3.4043 28.5762 3.31055C28.5254 3.2168 28.457 3.14062 28.3711 3.08203C28.2852 3.01953 28.1777 2.98828 28.0488 2.98828C27.8926 2.98828 27.7539 3.03125 27.6328 3.11719C27.5156 3.19922 27.4141 3.30469 27.3281 3.43359C27.2422 3.55859 27.1719 3.69531 27.1172 3.84375C27.0625 3.99219 27.0215 4.12891 26.9941 4.25391L28.7285 4.08984V3.96094ZM37.998 4.26562C37.998 4.60547 37.9746 4.94531 37.9277 5.28516C37.2598 5.32812 36.5957 5.39844 35.9355 5.49609C35.2754 5.58984 34.6152 5.68359 33.9551 5.77734C34.0566 6.05859 34.2148 6.2832 34.4297 6.45117C34.6484 6.61914 34.9082 6.70312 35.209 6.70312C35.3652 6.70312 35.5352 6.67383 35.7188 6.61523C35.9062 6.55664 36.0918 6.48438 36.2754 6.39844C36.459 6.30859 36.6348 6.21289 36.8027 6.11133C36.9707 6.00977 37.1152 5.91797 37.2363 5.83594L36.9551 8.49609C36.8027 8.61328 36.6367 8.71289 36.457 8.79492C36.2812 8.87695 36.0977 8.94336 35.9062 8.99414C35.7148 9.04492 35.5215 9.08203 35.3262 9.10547C35.1309 9.12891 34.9395 9.14062 34.752 9.14062C34.3652 9.14062 34.0117 9.08789 33.6914 8.98242C33.3711 8.87695 33.0801 8.73047 32.8184 8.54297C32.5605 8.35156 32.334 8.12695 32.1387 7.86914C31.9434 7.61133 31.7812 7.33008 31.6523 7.02539C31.5234 6.7207 31.4258 6.39844 31.3594 6.05859C31.293 5.71875 31.2598 5.375 31.2598 5.02734C31.2598 4.66406 31.293 4.30078 31.3594 3.9375C31.4258 3.57422 31.5254 3.22461 31.6582 2.88867C31.7949 2.55273 31.9648 2.24219 32.168 1.95703C32.375 1.66797 32.6152 1.41602 32.8887 1.20117C33.1621 0.986328 33.4707 0.818359 33.8145 0.697266C34.1621 0.576172 34.5449 0.515625 34.9629 0.515625C35.3105 0.515625 35.627 0.564453 35.9121 0.662109C36.2012 0.755859 36.457 0.888672 36.6797 1.06055C36.9062 1.22852 37.1016 1.42969 37.2656 1.66406C37.4336 1.89844 37.5703 2.15625 37.6758 2.4375C37.7852 2.71484 37.8652 3.00977 37.916 3.32227C37.9707 3.63086 37.998 3.94531 37.998 4.26562ZM35.6543 3.96094C35.6543 3.85156 35.6426 3.74023 35.6191 3.62695C35.5957 3.50977 35.5566 3.4043 35.502 3.31055C35.4512 3.2168 35.3828 3.14062 35.2969 3.08203C35.2109 3.01953 35.1035 2.98828 34.9746 2.98828C34.8184 2.98828 34.6797 3.03125 34.5586 3.11719C34.4414 3.19922 34.3398 3.30469 34.2539 3.43359C34.168 3.55859 34.0977 3.69531 34.043 3.84375C33.9883 3.99219 33.9473 4.12891 33.9199 4.25391L35.6543 4.08984V3.96094ZM44.9238 4.26562C44.9238 4.60547 44.9004 4.94531 44.8535 5.28516C44.1855 5.32812 43.5215 5.39844 42.8613 5.49609C42.2012 5.58984 41.541 5.68359 40.8809 5.77734C40.9824 6.05859 41.1406 6.2832 41.3555 6.45117C41.5742 6.61914 41.834 6.70312 42.1348 6.70312C42.291 6.70312 42.4609 6.67383 42.6445 6.61523C42.832 6.55664 43.0176 6.48438 43.2012 6.39844C43.3848 6.30859 43.5605 6.21289 43.7285 6.11133C43.8965 6.00977 44.041 5.91797 44.1621 5.83594L43.8809 8.49609C43.7285 8.61328 43.5625 8.71289 43.3828 8.79492C43.207 8.87695 43.0234 8.94336 42.832 8.99414C42.6406 9.04492 42.4473 9.08203 42.252 9.10547C42.0566 9.12891 41.8652 9.14062 41.6777 9.14062C41.291 9.14062 40.9375 9.08789 40.6172 8.98242C40.2969 8.87695 40.0059 8.73047 39.7441 8.54297C39.4863 8.35156 39.2598 8.12695 39.0645 7.86914C38.8691 7.61133 38.707 7.33008 38.5781 7.02539C38.4492 6.7207 38.3516 6.39844 38.2852 6.05859C38.2188 5.71875 38.1855 5.375 38.1855 5.02734C38.1855 4.66406 38.2188 4.30078 38.2852 3.9375C38.3516 3.57422 38.4512 3.22461 38.584 2.88867C38.7207 2.55273 38.8906 2.24219 39.0938 1.95703C39.3008 1.66797 39.541 1.41602 39.8145 1.20117C40.0879 0.986328 40.3965 0.818359 40.7402 0.697266C41.0879 0.576172 41.4707 0.515625 41.8887 0.515625C42.2363 0.515625 42.5527 0.564453 42.8379 0.662109C43.127 0.755859 43.3828 0.888672 43.6055 1.06055C43.832 1.22852 44.0273 1.42969 44.1914 1.66406C44.3594 1.89844 44.4961 2.15625 44.6016 2.4375C44.7109 2.71484 44.791 3.00977 44.8418 3.32227C44.8965 3.63086 44.9238 3.94531 44.9238 4.26562ZM42.5801 3.96094C42.5801 3.85156 42.5684 3.74023 42.5449 3.62695C42.5215 3.50977 42.4824 3.4043 42.4277 3.31055C42.377 3.2168 42.3086 3.14062 42.2227 3.08203C42.1367 3.01953 42.0293 2.98828 41.9004 2.98828C41.7441 2.98828 41.6055 3.03125 41.4844 3.11719C41.3672 3.19922 41.2656 3.30469 41.1797 3.43359C41.0938 3.55859 41.0234 3.69531 40.9688 3.84375C40.9141 3.99219 40.873 4.12891 40.8457 4.25391L42.5801 4.08984V3.96094ZM52.582 6.03516C52.582 6.47656 52.5762 6.91406 52.5645 7.34766C52.5566 7.77734 52.543 8.21094 52.5234 8.64844L49.1484 8.58984C49.2656 7.89844 49.3672 7.20898 49.4531 6.52148C49.5391 5.83008 49.582 5.13281 49.582 4.42969C49.582 4.37891 49.5801 4.29688 49.5762 4.18359C49.5723 4.07031 49.5645 3.94336 49.5527 3.80273C49.541 3.6582 49.5234 3.51172 49.5 3.36328C49.4805 3.21094 49.4512 3.07227 49.4121 2.94727C49.377 2.82227 49.332 2.7207 49.2773 2.64258C49.2266 2.56055 49.1641 2.51953 49.0898 2.51953C48.957 2.51953 48.8438 2.55859 48.75 2.63672C48.6602 2.71484 48.584 2.81641 48.5215 2.94141C48.4629 3.0625 48.416 3.19922 48.3809 3.35156C48.3457 3.50391 48.3184 3.65625 48.2988 3.80859C48.2832 3.96094 48.2715 4.10547 48.2637 4.24219C48.2598 4.375 48.2578 4.48438 48.2578 4.57031C48.2383 5.26172 48.2227 5.94922 48.2109 6.63281C48.1992 7.3125 48.1836 8 48.1641 8.69531L45.1758 8.82422C45.2539 7.44531 45.3281 6.07422 45.3984 4.71094C45.4727 3.34766 45.5312 1.97656 45.5742 0.597656L48.3398 0.457031L48.3164 1.39453C48.4258 1.26172 48.543 1.13672 48.668 1.01953C48.7969 0.902344 48.9336 0.802734 49.0781 0.720703C49.2227 0.634766 49.375 0.568359 49.5352 0.521484C49.6992 0.470703 49.8711 0.445312 50.0508 0.445312C50.3828 0.445312 50.6738 0.5 50.9238 0.609375C51.1738 0.71875 51.3887 0.867188 51.5684 1.05469C51.748 1.24219 51.8984 1.46484 52.0195 1.72266C52.1406 1.97656 52.2383 2.24805 52.3125 2.53711C52.3867 2.82617 52.4434 3.12891 52.4824 3.44531C52.5215 3.75781 52.5469 4.06641 52.5586 4.37109C52.5742 4.67578 52.582 4.9707 52.582 5.25586C52.582 5.54102 52.582 5.80078 52.582 6.03516Z"
          fill="#05C26A"
        />
      </svg>
    </article>
  );
};

export default ProductCard;
