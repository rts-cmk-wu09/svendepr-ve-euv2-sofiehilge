

const useTextLimit = (text, limit) => {
  return text && text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export default useTextLimit;
