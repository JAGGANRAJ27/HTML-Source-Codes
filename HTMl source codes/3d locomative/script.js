function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
loco();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  /img/ezgif-none-001.png
  /img/ezgif-none-002.png
  /img/ezgif-none-003.png
  /img/ezgif-none-004.png
  /img/ezgif-none-005.png
  /img/ezgif-none-006.png
  /img/ezgif-none-007.png
  /img/ezgif-none-008.png
  /img/ezgif-none-009.png
  /img/ezgif-none-010.png
  /img/ezgif-none-011.png
  /img/ezgif-none-012.png
  /img/ezgif-none-013.png
  /img/ezgif-none-014.png
  /img/ezgif-none-015.png
  /img/ezgif-none-016.png
  /img/ezgif-none-017.png
  /img/ezgif-none-018.png
  /img/ezgif-none-019.png
  /img/ezgif-none-020.png
  /img/ezgif-none-021.png
  /img/ezgif-none-022.png
  /img/ezgif-none-023.png
  /img/ezgif-none-024.png
  /img/ezgif-none-025.png
  /img/ezgif-none-026.png
  /img/ezgif-none-027.png
  /img/ezgif-none-028.png
  /img/ezgif-none-029.png
  /img/ezgif-none-030.png
  /img/ezgif-none-031.png
  /img/ezgif-none-032.png
  /img/ezgif-none-033.png
  /img/ezgif-none-034.png
  /img/ezgif-none-035.png
  /img/ezgif-none-036.png
  /img/ezgif-none-037.png
  /img/ezgif-none-038.png
  /img/ezgif-none-039.png
  /img/ezgif-none-040.png
  /img/ezgif-none-041.png
  /img/ezgif-none-042.png
  /img/ezgif-none-043.png
  /img/ezgif-none-044.png
  /img/ezgif-none-045.png
  /img/ezgif-none-046.png
  /img/ezgif-none-047.png
  /img/ezgif-none-048.png
  /img/ezgif-none-049.png
  /img/ezgif-none-050.png
  /img/ezgif-none-051.png
  /img/ezgif-none-052.png
  /img/ezgif-none-053.png
  /img/ezgif-none-054.png
  /img/ezgif-none-055.png
  /img/ezgif-none-056.png
  /img/ezgif-none-057.png
  /img/ezgif-none-058.png
  /img/ezgif-none-059.png
  /img/ezgif-none-060.png
  /img/ezgif-none-061.png
  /img/ezgif-none-062.png
  /img/ezgif-none-063.png
  /img/ezgif-none-064.png
  /img/ezgif-none-065.png
  /img/ezgif-none-066.png
  /img/ezgif-none-067.png
  /img/ezgif-none-068.png
  /img/ezgif-none-069.png
  /img/ezgif-none-070.png
  /img/ezgif-none-071.png
  /img/ezgif-none-072.png
  /img/ezgif-none-073.png
  /img/ezgif-none-074.png
  /img/ezgif-none-075.png
  /img/ezgif-none-076.png
  /img/ezgif-none-077.png
  /img/ezgif-none-078.png
  /img/ezgif-none-079.png
  /img/ezgif-none-080.png
  /img/ezgif-none-081.png
  /img/ezgif-none-082.png
  /img/ezgif-none-083.png
  /img/ezgif-none-084.png
  /img/ezgif-none-085.png
  /img/ezgif-none-086.png
  /img/ezgif-none-087.png
  /img/ezgif-none-088.png
  /img/ezgif-none-089.png
  /img/ezgif-none-090.png
  /img/ezgif-none-091.png
  /img/ezgif-none-092.png
  /img/ezgif-none-093.png
  /img/ezgif-none-094.png
  /img/ezgif-none-095.png
  /img/ezgif-none-096.png
  /img/ezgif-none-097.png
  /img/ezgif-none-098.png
  /img/ezgif-none-099.png
  /img/ezgif-none-100.png
  /img/ezgif-none-101.png
  /img/ezgif-none-102.png
  /img/ezgif-none-103.png
  /img/ezgif-none-104.png
  /img/ezgif-none-105.png
  /img/ezgif-none-106.png
  /img/ezgif-none-107.png
  /img/ezgif-none-108.png
  /img/ezgif-none-109.png
  /img/ezgif-none-110.png
  /img/ezgif-none-111.png
  /img/ezgif-none-112.png
  /img/ezgif-none-113.png
  /img/ezgif-none-114.png
  /img/ezgif-none-115.png
  /img/ezgif-none-116.png
  /img/ezgif-none-117.png
  /img/ezgif-none-118.png
  /img/ezgif-none-119.png
  /img/ezgif-none-120.png
  /img/ezgif-none-121.png
  /img/ezgif-none-122.png
  /img/ezgif-none-123.png
  /img/ezgif-none-124.png
  /img/ezgif-none-125.png
  /img/ezgif-none-126.png
  /img/ezgif-none-127.png
  /img/ezgif-none-128.png
  /img/ezgif-none-129.png
  /img/ezgif-none-130.png
  /img/ezgif-none-131.png
  /img/ezgif-none-132.png
  /img/ezgif-none-133.png
  /img/ezgif-none-134.png
  /img/ezgif-none-135.png
  /img/ezgif-none-136.png
  /img/ezgif-none-137.png
  /img/ezgif-none-138.png
  /img/ezgif-none-139.png
  /img/ezgif-none-140.png
  /img/ezgif-none-141.png
  /img/ezgif-none-142.png
  /img/ezgif-none-143.png
  /img/ezgif-none-144.png
  /img/ezgif-none-145.png
  /img/ezgif-none-146.png
  /img/ezgif-none-147.png
  /img/ezgif-none-148.png
  /img/ezgif-none-149.png
  /img/ezgif-none-150.png
  /img/ezgif-none-151.png
  /img/ezgif-none-152.png
  /img/ezgif-none-153.png
  /img/ezgif-none-154.png
  /img/ezgif-none-155.png
  /img/ezgif-none-156.png
  /img/ezgif-none-157.png
  /img/ezgif-none-158.png
  /img/ezgif-none-159.png
  /img/ezgif-none-160.png
  /img/ezgif-none-161.png
  /img/ezgif-none-162.png
  /img/ezgif-none-163.png
  /img/ezgif-none-164.png
  /img/ezgif-none-165.png
  /img/ezgif-none-166.png
/img/ezgif-none-167.png
/img/ezgif-none-168.png
/img/ezgif-none-169.png
/img/ezgif-none-170.png
/img/ezgif-none-171.png
/img/ezgif-none-172.png
/img/ezgif-none-173.png
/img/ezgif-none-174.png
/img/ezgif-none-175.png
/img/ezgif-none-176.png
/img/ezgif-none-177.png
/img/ezgif-none-178.png
/img/ezgif-none-179.png
/img/ezgif-none-180.png
/img/ezgif-none-181.png
/img/ezgif-none-182.png
/img/ezgif-none-183.png
/img/ezgif-none-184.png
/img/ezgif-none-185.png
/img/ezgif-none-186.png
/img/ezgif-none-187.png
/img/ezgif-none-188.png
/img/ezgif-none-189.png
/img/ezgif-none-190.png
/img/ezgif-none-191.png
/img/ezgif-none-192.png
/img/ezgif-none-193.png
/img/ezgif-none-194.png
/img/ezgif-none-195.png
/img/ezgif-none-196.png
/img/ezgif-none-197.png
/img/ezgif-none-198.png
/img/ezgif-none-199.png
/img/ezgif-none-200.png
/img/ezgif-pone-001.png
/img/ezgif-pone-002.png
/img/ezgif-pone-003.png
/img/ezgif-pone-004.png
/img/ezgif-pone-005.png
/img/ezgif-pone-006.png
/img/ezgif-pone-007.png
/img/ezgif-pone-008.png
/img/ezgif-pone-009.png
/img/ezgif-pone-010.png
/img/ezgif-pone-011.png
/img/ezgif-pone-012.png
/img/ezgif-pone-013.png
/img/ezgif-pone-014.png
/img/ezgif-pone-015.png
/img/ezgif-pone-016.png
/img/ezgif-pone-017.png
/img/ezgif-pone-018.png
/img/ezgif-pone-019.png
/img/ezgif-pone-020.png
/img/ezgif-pone-021.png
/img/ezgif-pone-022.png
/img/ezgif-pone-023.png
/img/ezgif-pone-024.png
/img/ezgif-pone-025.png
/img/ezgif-pone-026.png
/img/ezgif-pone-027.png
/img/ezgif-pone-028.png
/img/ezgif-pone-029.png
/img/ezgif-pone-030.png
/img/ezgif-pone-031.png
/img/ezgif-pone-032.png
/img/ezgif-pone-033.png
/img/ezgif-pone-034.png
/img/ezgif-pone-035.png
/img/ezgif-pone-036.png
/img/ezgif-pone-037.png
/img/ezgif-pone-038.png
/img/ezgif-pone-039.png
/img/ezgif-pone-040.png
/img/ezgif-pone-041.png
/img/ezgif-pone-042.png
/img/ezgif-pone-043.png
/img/ezgif-pone-044.png
/img/ezgif-pone-045.png
/img/ezgif-pone-046.png
/img/ezgif-pone-047.png
/img/ezgif-pone-048.png
/img/ezgif-pone-049.png
/img/ezgif-pone-050.png
/img/ezgif-pone-051.png
/img/ezgif-pone-052.png
/img/ezgif-pone-053.png
/img/ezgif-pone-054.png
/img/ezgif-pone-055.png
/img/ezgif-pone-056.png
/img/ezgif-pone-057.png
/img/ezgif-pone-058.png
/img/ezgif-pone-059.png
/img/ezgif-pone-060.png
/img/ezgif-pone-061.png
/img/ezgif-pone-062.png
/img/ezgif-pone-063.png
/img/ezgif-pone-064.png
/img/ezgif-pone-065.png
/img/ezgif-pone-066.png
/img/ezgif-pone-067.png
/img/ezgif-pone-068.png
/img/ezgif-pone-069.png
/img/ezgif-pone-070.png
/img/ezgif-pone-071.png
/img/ezgif-pone-072.png
/img/ezgif-pone-073.png
/img/ezgif-pone-074.png
/img/ezgif-pone-075.png
/img/ezgif-pone-076.png
/img/ezgif-pone-077.png
/img/ezgif-pone-078.png
/img/ezgif-pone-079.png
/img/ezgif-pone-080.png
/img/ezgif-pone-081.png
/img/ezgif-pone-082.png
/img/ezgif-pone-083.png
/img/ezgif-pone-084.png
/img/ezgif-pone-085.png
/img/ezgif-pone-086.png
/img/ezgif-pone-087.png
/img/ezgif-pone-088.png
/img/ezgif-pone-089.png
/img/ezgif-pone-090.png
/img/ezgif-pone-091.png
/img/ezgif-pone-092.png
/img/ezgif-pone-093.png
/img/ezgif-pone-094.png
/img/ezgif-pone-095.png
/img/ezgif-pone-096.png
/img/ezgif-pone-097.png
/img/ezgif-pone-098.png
/img/ezgif-pone-099.png
/img/ezgif-pone-100.png

 `;
  return data.split("\n")[index];
}

const frameCount = 300; 

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});