import Image from "next/image";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <a href="http://linkedin.com/in/matthew-hawksby" target="_blank" rel="noopener noreferrer">
        <Image src="https://img.shields.io/badge/Linkedin-0077B5.png" alt="LinkedIn" width={60} height={15} />
      </a>

      <a href="https://www.kaggle.com/matthewhawksby" target="_blank" rel="noopener noreferrer">
        <Image src="https://img.shields.io/badge/Kaggle-20BEFF.png" alt="Kaggle" width={60} height={15} />
      </a>

      <a href="https://devpost.com/MatthewHawksbyGithub" target="_blank" rel="noopener noreferrer">
        <Image src="https://img.shields.io/badge/DevPost-ff66ab.png" alt="DevPost" width={60} height={15} />
      </a>

      <a href="https://leetcode.com/u/MatthewHawksbyGithub" target="_blank" rel="noopener noreferrer">
        <Image src="https://img.shields.io/badge/Leetcode-FFA116.png" alt="Leetcode" width={60} height={15} />
      </a>

      <a href="https://huggingface.co/mHawksby" target="_blank" rel="noopener noreferrer">
        <Image src="https://img.shields.io/badge/HuggingFace-69899c.png" alt="Hugging Face" width={60} height={15} />
      </a>

      <a href="http://www.codewars.com/users/MatthewHawksbyGithub" target="_blank" rel="noopener noreferrer">
        <Image src="https://img.shields.io/badge/Codewars-red.png" alt="Codewars" width={60} height={15} />
      </a>
    </div>
  );
};

export default SocialLinks;
