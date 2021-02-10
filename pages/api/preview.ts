import {ClientPreview} from "../../src/utils/prismic_configuration";
import { linkResolver } from '../../src/utils/prismic_configuration'

const Preview = async (req, res) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await ClientPreview(req)
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, "/post/preview");

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ ref });
  res.writeHead(302, { Location: `${redirectUrl}`  })
  res.end();
};

export default Preview;
