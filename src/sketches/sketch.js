import Tree from "./Tree"
import Explorer from "./Explorer"
import Controls from "./Controls"
export default function sketch(p){
    let canvas;
    const CANVASHEIGHT = window.innerHeight-50;
    const CANVASWIDTH = window.innerWidth-50

    p.setup = () => {
      var canvas = p.createCanvas(CANVASWIDTH, CANVASHEIGHT);
      canvas.parent('canvas-placeholder');

      // Create other necessary objects for the visualization
      var tree = new Tree(Tree.TREEX, Tree.TREEY, Tree.BACKGROUNDCOLOR);
      var explorer = new Explorer(canvas.canvas, tree.graphicsBuffer, tree.draw.bind(tree));
      var controls = new Controls(tree)

    }

    p.draw = () => {
      p.background('orangered');
      p.tree.draw();
      p.explorer.draw();
      p.controls.draw();
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        p.fill(newProps.color);
    }
}