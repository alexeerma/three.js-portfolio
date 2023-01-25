import styles from './style';
import { NavBar, Hero, CTA, Footer } from './components';

const App = () => (

  <div class="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <CTA /> 
            <Footer />
        </div>
      </div>


    </div>
 );
 export default App
// function App() {
  // useEffect(() => {
  //   const test = new SceneInit('myThreeJsCanvas');
  //   test.initialize();
  //   test.animate();

  //   const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
  //   const boxMaterial = new THREE.MeshNormalMaterial();
  //   const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

  //   test.scene.add(boxMesh);

  //   const animate = () => {
  //       test.scene.rotation.x += 0.01;
  //       test.scene.rotation.y += 0.01;
  //       test.scene.rotation.z += 0.01;
  //     window.requestAnimationFrame(animate);
  //   };

  // }, []);

 
    // <div>
    //   <canvas id="myThreeJsCanvas" />
    // </div>
  