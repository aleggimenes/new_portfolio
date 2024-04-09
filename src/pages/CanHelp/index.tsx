import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CanHelp() {
  const [ref1, inView1] = useInView({ threshold: 0.5 }); // Ref e estado para o primeiro componente
  const [ref2, inView2] = useInView({ threshold: 0.5 }); // Ref e estado para o segundo componente
  const [ref3, inView3] = useInView({ threshold: 0.5 }); // Ref e estado para o terceiro componente
  const [width, setWidth] = useState(window.innerWidth);
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  useEffect(() => {
    // Função para atualizar a largura da página quando a janela for redimensionada
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Adiciona um event listener para o evento de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Remove o event listener quando o componente for desmontado para evitar vazamento de memória
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Executa o efeito apenas uma vez

  return (
    <section className="help-section" id="canhelpSection">
      <div className="section-top-fade-top" />
      <div className="help-container">
        <h1 className="help-container-h1">I can help you with ...</h1>
        <motion.div
          className="help-first-dev"
          variants={containerVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          ref={ref1}
        >
          <div className="help-first-dev-container">
            <h1 className="help-first-dev-container-number">01.</h1>
            <div className="help-first-dev-container-line" />
            <h1 className="help-first-dev-container-title">{"Development"}</h1>
            <p className="help-first-dev-container-description">
              My last job involved being part of various projects, including e-commerce and initiatives aimed at streamlining specific business processes, across different development teams.
            </p>
          </div>
          <img src="./img/development.svg" className="help-first-dev-container-img" alt="Development" />
        </motion.div>

        <motion.div
          className="help-first-dev"
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          ref={ref2}
        >
          {width <= 880 ?
            <>
              <div className="help-first-dev-container">
                <h1 className="help-first-dev-container-number">02.</h1>
                <div className="help-first-dev-container-line" style={{ backgroundColor: '#f92672' }} />
                <h1 className="help-first-dev-container-title" style={{ color: '#f92672' }}>{"App Development"}</h1>
                <p className="help-first-dev-container-description">I also worked on React Native app projects, such as an e-commerce platform for selling perfumes and a virtual pharmacy where users could select their medications and make purchases.</p>
              </div>
              <img src="./img/development_2.svg" className="help-first-dev-container-img" alt="Development 2" />

            </>
            :
            <>
              <img src="./img/development_2.svg" className="help-first-dev-container-img" alt="Development 2" />

              <div className="help-first-dev-container">
                <h1 className="help-first-dev-container-number">02.</h1>
                <div className="help-first-dev-container-line" style={{ backgroundColor: '#f92672' }} />
                <h1 className="help-first-dev-container-title" style={{ color: '#f92672' }}>{"App Development"}</h1>
                <p className="help-first-dev-container-description">I also worked on React Native app projects, such as an e-commerce platform for selling perfumes and a virtual pharmacy where users could select their medications and make purchases.</p>
              </div>

            </>
          }
        </motion.div>
        <motion.div
          className="help-first-dev"
          variants={containerVariants}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          ref={ref3}
        >
          <div className="help-first-dev-container">
            <h1 className="help-first-dev-container-number">03.</h1>
            <div className="help-first-dev-container-line" style={{ backgroundColor: '#66d9ef' }} />
            <h1 className="help-first-dev-container-title" style={{ color: '#66d9ef' }}>{"Dashboard Development"}</h1>
            <p className="help-first-dev-container-description">I also participated in dashboard development, where we handled the project's administrative frontend for managers. This involved displaying tables listing products, customers, profit graphs, and everything else typically found in a dashboard.</p>
          </div>
          <img src="./img/development_3.svg" className="help-first-dev-container-img" alt="Development 3" />
        </motion.div>
      </div>
      <div className="section-top-fade-bottom" />

    </section >
  );
}